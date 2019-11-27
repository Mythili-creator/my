-- Include table data insertion, updation, deletion and select scripts
show tables;

-- SQL query to insert into menu items.
insert into  menu_item(me_name,me_price,me_active,me_date_of_launch,me_category,me_free_delivery,me_image)
 values("Burger", 129.00, true, '2017-12-23', "Main Course",
					false,'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=800');      
	
                    insert into  menu_item(me_name,me_price,me_active,me_date_of_launch,me_category,me_free_delivery,me_image)
 values("Sandwich", 99.00, true,'2017-03-15', 
				"Main Course", true,'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80');
               
               
insert into  menu_item(me_name,me_price,me_active,me_date_of_launch,me_category,me_free_delivery,me_image)
 values( "Pizza", 149.00, true,'2018-08-21', "Main Course",
					false,'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1355&amp;q=80' ); 

insert into  menu_item(me_name,me_price,me_active,me_date_of_launch,me_category,me_free_delivery,me_image)
 values( "French Fries", 57.00, false,'2017-07-02',
					"Starters", true,'https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80' );     
insert into  menu_item(me_name,me_price,me_active,me_date_of_launch,me_category,me_free_delivery,me_image)
 values( "Chocolate Brownie", 32.00, true,'2022-11-02',
					"Dessert", true,'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1330&amp;q=80' ); 

insert into user_ (us_id, us_name,us_password) values(4,"default",'$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK');
select * from user;
truncate cart;
update menu_item set me_id=5 where me_id=6;           
delete from menu_item where me_id=5; 
delete from user where us_id=1;
desc role;

       