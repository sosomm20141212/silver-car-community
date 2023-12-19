package com.example.sprint;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Crawling {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "C:/sprint_project_personal_work/sprint/chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        try {
            final String pageUrl = "https://www.nhis.or.kr/nhis/policy/retrieveAssistingDevicesRegStoreList.do";
            driver.get(pageUrl);

            WebElement selectE = driver.findElement(By.id("pumMokCd"));

            Select select = new Select(selectE);
            select.selectByIndex(4);

            WebElement selectSearchButton = driver.findElement(By.xpath("//*[@id='adaWbmkbVO']/div[1]/div[2]/a"));
            selectSearchButton.click();

            Thread.sleep(2000);

            int maxPageNumber = 21; 
            for (int currentPage = 1; currentPage <= maxPageNumber; currentPage++) { 
                selectOddRow(driver);
                
                for (int i=1; i<=9; i++) {
                    WebElement selectATag = driver.findElement(By.xpath("//*[@id='adaWbmkbVO']/div[3]/div/div/a["+i+"]"));
                    selectATag.click();
                    selectOddRow(driver);
                }
                navigateToNextPage(driver);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }

    private static void navigateToNextPage(WebDriver driver) {
        try {
            WebElement nextPageLink = driver.findElement(By.className("next"));  
            nextPageLink.click();

            Thread.sleep(2000);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void selectOddRow(WebDriver driver) {
        WebElement number;
        WebElement storeName;
        WebElement storeAddress;
        WebElement phoneNumber;
        String fileName = "storeList2.csv";
        
        try(BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(fileName,true), "UTF-8"))) {
            for (int i=1; i<=20; i++) {
                if (i % 2 == 1) {
                    number = driver.findElement(By.xpath("//*[@id='adaWbmkbVO']/div[2]/table/tbody/tr["+i+"]/td[1]"));
                    storeName = driver.findElement(By.xpath("//*[@id='adaWbmkbVO']/div[2]/table/tbody/tr["+i+"]/td[2]/strong"));
                    storeAddress = driver.findElement(By.xpath("//*[@id='adaWbmkbVO']/div[2]/table/tbody/tr["+i+"]/td[3]"));
                    phoneNumber = driver.findElement(By.xpath("//*[@id='adaWbmkbVO']/div[2]/table/tbody/tr["+i+"]/td[4]"));

                    writer.write(number.getText()+"/// ");
                    writer.write(storeName.getText()+"/// ");
                    writer.write(storeAddress.getText()+"/// ");
                    writer.write(phoneNumber.getText());
                    writer.newLine();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
