-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT 
    p.Productname,
    c.categoryname
 FROM product as p
 JOIN category as c
 ON p.Categoryid = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT 
    o.id,
    s.CompanyName
 FROM "Order" as o
 JOIN Shipper as s
 ON s.id = o.shipvia
 WHERE o.orderdate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT  
    product.ProductName,
    orderDetail.Quantity
from Product
join OrderDetail
ON orderDetail.ProductId = product.id
WHERE orderid = "10251"
ORDER BY product.productname;


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT
    o.id as 'OrderID',
    c.companyname as 'Company_Name',
    e.lastname as 'Employee_LastName'
From 'order' as o
join Customer as c,
    Employee as e
ON o.Customerid = c.id and o.EmployeeId = e.id;