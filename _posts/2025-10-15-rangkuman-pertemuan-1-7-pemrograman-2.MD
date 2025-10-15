---
layout: post
title: "Rangkuman Catatan Pertemuan 1 sampai 7 Pemrograman II P1"
date: 2025-10-15 08:00:00 +0700
categories: [jekyll, blogging]
tags: [Pemrograman2, Matkul]
---

## Kontrak Kuliah
- Konsep dasar pemrograman java
- Percabangan perulangan
- Tipe data array dab collection
- Object dan class
- Class string dan string method
- Constructor
- Encapsulation
- Inheritance
- Polmorphisme
- Abstrak class & interface
- Pengelanan GUI

Minimal kehadiran 80% <br>
Apabila Tidak Memenuhi, nilai dipotong 50%

### Penilaian
- 10% presensi
- 20% tugas
- 30% UTS
- 40% UAS

### UAS
Case base <br>
Membuat sebuah aplikasi sederhana berbasis GUI <br>
Segala tindak plagiasi dapat menjadi nilai 0
Paradigma <br>

### Metodologi / konsep
Digunakan untuk mengenbangkan sebuah peogram <br>
Toolsnya bahasa pemrograman <br>
Menerapkan bahasa pemrograman tersebut kita menggunakan paradigma pemrograman


Paradigma paling populer yaotu imperative
- Procedural programming
- Structural
- Object Oriented
- Paradigma declarative

### Structural Paradigm
Syntax Go To untuk lompat ke baris tertentu

### Procedural dan Functional
- Procedural adalah fungsi yg tidak mengembalikan nilai
- Functional adalah fungsi yang mengembalikan nilai


### Objek oriented programming
Representasi dalam program memiliki objek <br>
Tiap projek kompleks berbasis objek


Pengenalan Java
- Java untuk multiplatform
- JVM (Java Virtual Machine)
- JDK
- JRE

Meminimalisir kode yg terulang<br>

**Kenapa java?** <br> 
karna java mewajibkan paradigma OOP, karena itu java bagus untuk belajar OOP <br>

- package: memberi tahu dimana source code berada
- Import: menghubungkan source code antara folder yg berbeda
- Penamaan class diharuskan menggunakan Capital

**Class** -> Blueprint <br>
**Objek** -> Suatu entitas yg nyata

## Atribut
Atribut adalah variabel dalam class<br>
Atribut dapat berupa objek

## Constructor
**Constuctor** -> Method spesial untuk menginisialisasi objek

dipanggil pada saat kita membuat objek dari kelas
nama constructor sama dengan nama class

di dalam constructor jangan ada print, karna cuma untuk inisialisasi saja

```
public class_name{
    class_name(parameter){
        ...
    }
}
```


Inisialisasi Constructor
```
class_name object_name = new class_name()
```

notes: best practice assign value suatu variable di dalam constructor

## Method
**Method** -> Blok kode yang melakukan tugas tertentu

Untuk meningkatkan efesiensi dan kerapian kode

Method lebih menunjukan perilaku sebuah objek dibanding fungsi

Struktur Method
```
<modifier> <data-type> <method-name> (parameter-list[])
{
... body of the method
}
```

Fungsi Procedural --> tidak mengembalikan nilai<br>
Fungsi Functional --> mengembalikan nilai

camelCase untuk method

Reusability
Modularity

Notes:
nama Method harus memakai kata kerja

## Control Flow
Mengontrol alur program

- Satu Cabang (if)
- Dua Cabang (else)
- Tiga Cabang (else if)

notes: penulisan if pada java boleh tanpa braces tetapi hanya berlaku pada satu baris saja

## Ternary Operator 
```
variable = (condition) ? expressionTrue : expressionFalse;
```

## Nested Loop
## Operator Logika
## Switch

tipe data primitive tidak bisa diberikan nilai null, cuma objek saja

## For
for -> perulangan dilakukan sebanyak yg ditetapkan\
for(inisialisasi; condition; increment/decrement){
...
}

## For Each
for each -> untuk melakukan iterasi collection
for(iterate : collection){
...
}

## While
while -> perulangan yg dilakukan selama kondisi benar <br>
while lebih flexibel daripada for
```
while(condition){
...
}
```


## Do While
do while -> sama seperti while tetapi menjalankan statement kemudian menjalankan kondisi <br>
akan guarantee untuk menjalankan statement setidaknya satu kali
```
do {
...
} while(condition)
```


## Common Loop Mistake
1. Infinite Loop
2. Off by one 
3. Modifying loop variable inside the loop
4. Empty Loop

## Collection
diperbolehkan memanfaatkan class builtin 
- java.lang.Math
- java.util.Arrays
- java.util.ArrayList

# Scope
Scope Global -> dideklarasikan di dalam class tapi di luar method <br>
Scope Local -> dideklarasikan di dalam method

# This
merujuk ke atribut di dalam objek

## Call Stack
Last-In-First-Out

## Static dan Non Static
Why? 
tiap kali membuat class perlu diinisialisasi objek, tetapi ada case dimana class digunakan untuk menampung method saja.

dalam case inilah static digunakan.
## Enkapsulasi

Mengikat data dan metode dalam satu unit

benefit
manajemen kode yang lebih baik
pengalihan parameter yang lebih sederhana
pengambil dan penyetel (setter dan getter)

menjaga integritas data

## Access Modifier
secure and modular

default -> hanya bisa diakses oleh class yang berada di package yang sama
public -> semua class
private -> hanya bisa diakses di class tersebut saja

rekomendasi semua variabel di private tapi sesuai kebutuhan saja

di dalam class object tidak boleh ada method main <br>

class object terdiri dari: 
- atribute
- constructor
- setter
- getter
- method

## Inheritance

subclass <br>
superclass

inheritance digunakan untuk reusable code

## Class Diagram

Boleh tidak ada atribut atau method tetapi tidak keduanya

### Association
relasi yg lebih umum

### Aggregation
Objek dideklarasikan di luar, bukan di dalam class

### Composition
Dideklarasikan secara lokal

### Inheritance

## Polymorphism

**Polymorphism** -> Menimpa method

```
@overloading
public void nama_method(){
    ...
}
```
