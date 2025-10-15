---
layout: post
title: "Rangkuman Catatan Pertemuan 1 sampai 7 Pemrograman II P1"
date: 2025-10-15 08:00:00 +0700
categories: [jekyll, blogging]
tags: [Pemrograman2, Matkul]
---

Class -> Blueprint
Objek -> Suatu entitas yg nyata

## Atribut
Atribut adalah variabel dalam class
Atribut dapat berupa objek

## Constructor
class_name object_name = new class_name()

## Method

Mengontrol alur program

penulisan if pada java boleh tanpa braces tetapi hanya berlaku pada satu baris saja

## Satu Cabang (if)
## Dua Cabang (else)
## Tiga Cabang (else if)

## Ternary Operator 
variable = (condition) ? expressionTrue : expressionFalse;

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
while -> perulangan yg dilakukan selama kondisi benar
while lebih flexibel daripada for
while(condition){
...
}

## Do While
do while -> sama seperti while tetapi menjalankan statement kemudian menjalankan kondisi
akan guarantee untuk menjalankan statement setidaknya satu kali
do {
...
} while(condition)

## Common Loop Mistake
1. Infinite Loop
2. Off by one 
3. Modifying loop variable inside the loop
4. Empty Loop

## Pertanyaan
Polimorfisme itu untuk apa dalam pengembangan aplikasi atau game

diperbolehkan memanfaatkan class builtin 

- java.lang.Math
- java.util.Arrays
- java.util.ArrayList

Constuctor -> Method spesial untuk menginisialisasi objek

dipanggil pada saat kita membuat objek dari kelas
nama constructor sama dengan nama class

# Scope
Scope Global -> dideklarasikan di dalam class tapi di luar method
Scope Local -> dideklarasikan di dalam method

# This
merujuk ke variabel global

di dalam constructor jangan ada print, karna cuma untuk inisialisasi saja

Masing-masing pilih objek tangibel dan intangibel

Atribut
Constuctor
Method

Notes:
best practice assign value suatu variable di dalam constructor

Method -> Blok kode yang melakukan tugas tertentu

Untuk meningkatkan efesiensi dan kerapian kode

Method lebih menunjukan perilaku sebuah objek dibanding fungsi

Struktur Method
```
<modifier> <data-type> <method-name> (parameter-list[])
{
... body of the method
}
```

Fungsi Procedural
Fungsi Functional

camelCase untuk method

Reusability
Modularity

## Call Stack
Last-In-First-Out

Notes:
nama Method harus memakai kata kerja

## Static dan Non Static
Why? 
tiap kali membuat class perlu diinisialisasi objek, tetapi ada case dimana class digunakan untuk menampung method saja.

dalam case inilah static digunakan.

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

di dalam class object tidak boleh ada method main, 
atribute
constructor
setter
getter
method

## Inheritance

subclass
superclass

inheritance digunakan untuk reusable code

## Class Diagram

Boleh tidak ada atribut atau method tetapi tidak keduanya

## Association
relasi yg lebih umum

## Aggregation
Objek dideklarasikan di luar, bukan di dalam class

## Composition
Dideklarasikan secara lokal

## Inheritance

## Polymorphism

## Menimpa 
override

flag

## Overloading
