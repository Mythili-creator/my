package com.cognizant.stockservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.stockservice.bean.StockPrice;

/**
 * @author 805831
 *
 */
public interface StockPriceRepository extends JpaRepository<StockPrice, Integer> {

}
