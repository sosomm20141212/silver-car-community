package com.kepco.scc.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
}