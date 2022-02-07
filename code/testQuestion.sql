select customers.name as 'Customers' from customers 
where customers.id not in (
	select customerid from orders
);

delete p1 from Person p1,Person p2 
where p1.Email=p2.Email and p1.Id>p2.Id;

select weather.id as 'Id' 
from weather join weather w on DATEDIFF(weather.recordDate,w.recordDate)=1
 and weather.Temperature>w.Temperature;