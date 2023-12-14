package com.kepco.scc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Store;

public interface StoreRepository extends JpaRepository<Store,Integer>{ 
    List<Store> findByAddressContaining(String address);
}
