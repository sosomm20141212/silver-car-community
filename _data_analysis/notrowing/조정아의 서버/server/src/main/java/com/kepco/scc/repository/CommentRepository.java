package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Comment;

public interface CommentRepository extends JpaRepository<Comment,Integer>{
    
}
