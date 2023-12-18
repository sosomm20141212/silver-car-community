package com.kepco.scc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Comment;
import com.kepco.scc.model.Posting;

public interface CommentRepository extends JpaRepository<Comment,Integer>{
    Comment findByCommentSeq(int commentSeq);
    List<Comment> findByGroupSeq(int groupSeq);
    List<Comment> findByPostingAndGroupSeq(Posting posting, int groupSeq);
    List<Comment> findByPostingAndGroupSeqIsNotOrderByGroupSeqDesc(Posting posting, int groupSeq);
}
