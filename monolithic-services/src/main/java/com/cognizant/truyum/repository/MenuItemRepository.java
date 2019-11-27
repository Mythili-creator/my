package com.cognizant.truyum.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.truyum.bean.MenuItem;
import com.cognizant.truyum.bean.Role;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Integer> {
	//MenuItem findById(int id);
	@Query(value = "select * from truyum.menu_item where me_active = '1' && me_date_of_launch < \"2019-01-01\"", nativeQuery = true)
	List<MenuItem> getMenuItem();

	public Optional<MenuItem> findById(int menuItemId);
	
}
