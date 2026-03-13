// Shader Background using THREE.js
let scene, camera, renderer, mesh, time = 0;
let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;

const vertexShader = `
  uniform float time;
  uniform vec2 mouse;
  varying vec2 vUv;
  varying float vNoise;

  // Simplex noise function
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
                                    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                             + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    vUv = uv;
    
    vec3 pos = position;
    
    // Combine multiple noise octaves
    float noise = snoise(vec3(uv.x * 2.0, uv.y * 2.0, time * 0.3)) * 0.5;
    noise += snoise(vec3(uv.x * 4.0, uv.y * 4.0, time * 0.4)) * 0.25;
    noise += snoise(vec3(uv.x * 8.0, uv.y * 8.0, time * 0.5)) * 0.125;
    
    // Mouse influence
    vec2 mouseNorm = mouse;
    float mouseDist = distance(uv, mouseNorm);
    float mouseInfluence = exp(-mouseDist * mouseDist * 4.0) * 0.6;
    
    noise += mouseInfluence;
    vNoise = noise;
    
    pos.z = noise * 20.0;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec2 mouse;
  varying vec2 vUv;
  varying float vNoise;

  void main() {
    vec3 color1 = vec3(0.12, 0.18, 0.03);  // Very muted green
    vec3 color2 = vec3(0.01, 0.25, 0.15);  // Very muted blue-green
    vec3 color3 = vec3(0.15, 0.30, 0.03);  // Very muted lime
    
    // Create animated color shifts
    float t = sin(time * 0.5) * 0.5 + 0.5;
    vec3 baseColor = mix(mix(color1, color2, t), color3, sin(time * 0.3) * 0.5 + 0.5);
    
    // Add noise-based color variation
    vec3 finalColor = baseColor + vNoise * 0.05;
    // vec3 finalColor = baseColor;
    
    // Add vignette effect
    vec2 vignetteUv = vUv - 0.5;
    float vignette = 1.0 - length(vignetteUv) * 0.0;
    
    finalColor *= vignette;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function initShaderBackground(canvasId = 'shader-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const width = window.innerWidth;
  const height = canvas.parentElement.offsetHeight;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    antialias: true, 
    alpha: false,
    powerPreference: 'high-performance'
  });

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x1a1915, 1);

  camera.position.z = 50;

  const geometry = new THREE.PlaneGeometry(100, 100, 200, 200);
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      time: { value: 0 },
      mouse: { value: new THREE.Vector2(0.5, 0.5) }
    },
    wireframe: false
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Mouse tracking
  document.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX / window.innerWidth;
    targetMouseY = 1.0 - (e.clientY / window.innerHeight);
  });

  // Window resize
  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  time += 0.016; // ~60fps

  // Smooth mouse interpolation
  mouseX += (targetMouseX - mouseX) * 0.5;
  mouseY += (targetMouseY - mouseY) * 0.5;

  mesh.material.uniforms.time.value = time;
  mesh.material.uniforms.mouse.value.set(mouseX, mouseY);

  renderer.render(scene, camera);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShaderBackground);
} else {
  initShaderBackground();
}
