package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Comment;
import com.kepco.scc.model.Posting;

import java.util.List;


public interface CommentRepository extends JpaRepository<Comment,Integer>{
    List<Comment> findByPostingAndGroupSeq(Posting posting, int groupSeq);
    List<Comment> findByPostingAndGroupSeqIsNotOrderByGroupSeqDesc(Posting posting, int groupSeq);
}
