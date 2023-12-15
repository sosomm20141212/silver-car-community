package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Account;

public interface AccountRepository extends JpaRepository<Account,String>{
    Account findByUserId(String userId);
    Account findByUserIdAndPassword(String userId, String password);
}
