package com.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.auth.model.UserList;


@Repository
public interface UserRepository extends JpaRepository<UserList, Integer> {
	UserList findByUserName(String userName);

	@Query(value = "SELECT SUM(m.me_price) AS cart_total FROM menu_item AS m INNER JOIN cart AS c ON m.me_id = c.ct_pr_id WHERE c.ct_us_id = ?1", nativeQuery = true)
	Double getCartTotal(int userId);

}
