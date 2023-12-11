package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Attachement;

public interface AttachementRepository extends JpaRepository<Attachement,String>{
    
}
