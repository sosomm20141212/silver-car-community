package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Store;

public interface StoreRepository extends JpaRepository<Store,Integer>{
    
}
