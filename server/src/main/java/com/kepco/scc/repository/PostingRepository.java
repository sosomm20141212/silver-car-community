package com.kepco.scc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Posting;

public interface PostingRepository extends JpaRepository<Posting,Integer>{
    List<Posting> findByAccountUserIdContaining (String userId);
    List<Posting> findByTitleContaining(String title);
    List<Posting> findByContentContaining(String content);
    Posting findByPostingSeq(int postingSeq);
}
