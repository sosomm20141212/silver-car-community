package com.kepco.scc.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.kepco.scc.model.Account;
import com.kepco.scc.model.Comment;
import com.kepco.scc.model.Posting;
import com.kepco.scc.repository.AccountRepository;
import com.kepco.scc.repository.CommentRepository;
import com.kepco.scc.repository.PostingRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class PostingController {
    @Autowired
    private AccountRepository accountDB;
    @Autowired
    private PostingRepository postingDB;
    @Autowired
    private CommentRepository commentDB;
    
    @GetMapping("/community")
    public List<Posting> showFirstPage() {
        List<Posting> allData = postingDB.findAll();
        Collections.reverse(allData);
        return allData;
    }
    @PostMapping("/community")
    public List<Posting> showSearchPostings(@RequestBody Map<String,String> data) {
        List<Posting> searchData;
        String type = data.get("type");
        String text = data.get("text");

        switch (type) {
            case "userId":
                searchData = postingDB.findByAccountUserIdContaining(text);
                break;
            case "title":
                searchData = postingDB.findByTitleContaining(text);
                break;
            case "content":
                searchData = postingDB.findByContentContaining(text);
                break;
            default:
                searchData = postingDB.findAll();
                break;
        }
        Collections.reverse(searchData);

        return searchData;
    }
    @PostMapping("/community/write")
    public void writePosting(@RequestBody Map<String,String> data) {
        Posting newPosting = new Posting();
        Account accessAccount = accountDB.findByUserId(data.get("userId"));

        newPosting.setAccount(accessAccount);
        newPosting.setTitle(data.get("title"));
        newPosting.setContent(data.get("content"));
        newPosting.setRegistrationDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")).toString());
        postingDB.save(newPosting);
    }
    @GetMapping("/community/rewrite/{postingNumber}")
    public Posting setRewritePosting(@PathVariable int postingNumber) {
        Posting setData = postingDB.findByPostingSeq(postingNumber);

        return setData;
    }
    @PostMapping("/community/rewrite/{postingNumber}")
    public void rewrewritePosting(@PathVariable int postingNumber, @RequestBody Map<String,String> data) {
        Posting rePosting = postingDB.findByPostingSeq(postingNumber);

        rePosting.setTitle(data.get("title"));
        rePosting.setContent(data.get("content"));
        rePosting.setRegistrationDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")).toString());
        postingDB.save(rePosting);
    }
    @GetMapping("/community/read/{postingNumber}")
    public Map<String, Object> readPosting(@PathVariable int postingNumber) {
        Map<String, Object> getSumData = new HashMap<>();
        Posting getPosting = postingDB.findByPostingSeq(postingNumber);
        List<Comment> getComments = commentDB.findByPostingAndGroupSeq(getPosting, 0);
        List<Comment> getReplys = commentDB.findByPostingAndGroupSeqIsNotOrderByGroupSeqDesc(getPosting,0);

        getSumData.put("posting", getPosting);
        getSumData.put("comments", getComments);
        getSumData.put("replys", getReplys);

        return getSumData;
    }
    @PostMapping("/community/commwrite")
    public Map<String, Object> writeComment(@RequestBody Map<String,String> data) {
        Comment newComment = new Comment();
        Account accessAccount = accountDB.findByUserId(data.get("userId"));
        Posting currenPosting = postingDB.findByPostingSeq(Integer.parseInt(data.get("postingSeq")));

        newComment.setAccount(accessAccount);
        newComment.setPosting(currenPosting);
        newComment.setContent(data.get("content"));
        newComment.setGroupSeq(Integer.parseInt(data.get("groupSeq")));
        newComment.setRegistrationDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")).toString());
        commentDB.save(newComment);

        return readPosting(Integer.parseInt(data.get("postingSeq")));
    }
    @DeleteMapping("/community/delete/{postingNumber}")
    public List<Posting> deletePosting(@PathVariable int postingNumber) {
        Posting deleteData = postingDB.findByPostingSeq(postingNumber);

        postingDB.delete(deleteData);

        List<Posting> allData = postingDB.findAll();
        Collections.reverse(allData);

        return allData;
    }
    @DeleteMapping("/community/commdelete/{postingNumber}/{commentNumber}")
    public Map<String, Object> deleteComment(@PathVariable int postingNumber, @PathVariable int commentNumber) {
        Comment deleteData = commentDB.findByCommentSeq(commentNumber);

        if (deleteData.getGroupSeq() == 0) {
            List<Comment> deleteReply = commentDB.findByGroupSeq(deleteData.getCommentSeq());
            commentDB.deleteAll(deleteReply);
        }
        commentDB.delete(deleteData);

        return readPosting(postingNumber);
    }
}