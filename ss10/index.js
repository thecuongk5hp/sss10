"use strict";
/*
    OOP: lập trình hướng đối tượng
    Object-oriented programming
    là mô hình lập trình dựa vào các đối tượng thực tế
    đối tượng con mèo,ô tô,...
    1 đối tương sẽ gồm có thuộc tính và phương thức
    ví dụ đối tượng con mèo
    thuộc tính : màu lông,màu mắt
    phương thức: bắt chuột,chạy
    ví dụ về đối tượng xe ô tô
    thuộc tính: màu sắc,số bánh xe,số cửa,số động cơ
    phương thức: chạy,bật đèn,bật còi,bật nhạc

    cách tạo đối tượng
    1 dùng let ,const,var
    let student={

    }
    2.dùng new object()
    3.dùng hàm tạo constructor --> dung dùng từ khóa new
    4.dùng class
*/
// yêu cầu tạo 1 đối tưongj student
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //khai báo các phương thức
    // ví dụ thầy có phương thức get Name
    getName() {
        console.log(`xin chào ${this.name}`);
        return this.name;
    }
    getAge() {
        console.log("");
    }
}
// khởi tạo đối tượng dùng từ khó new
let std1 = new Student("minh thu", 5);
console.log(std1);
// lấy thuộc tính
// đối tượng  chấm thuôc tính
console.log("đối tương std1 có thuộc tính name giá trị là", std1.name);
// gọi phương thức
// đối tượng chấm phương thức
console.log("gọi phương thức getName", std1.getName());
/*
    các tính chất của lập trình hướng đối tượng
    4 tính chất
    1. đóng gói
    2. kế thừa
    3. đa hình
    4. tính trừu tượng
*/
