package com.ramp.bill_managementservice.controllers;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/bill/upload")
public class FileUploadController {

    @PostMapping
    public String handleFileUpload(@RequestParam("file") MultipartFile file) {
        try (InputStream inputStream = file.getInputStream()) {
            PDDocument document = PDDocument.load(inputStream);
            PDFTextStripper stripper = new PDFTextStripper();
            int numPages = document.getNumberOfPages();
            StringBuilder contentBuilder = new StringBuilder();

            for (int pageNumber = 1; pageNumber <= numPages; pageNumber++) {
                stripper.setStartPage(pageNumber);
                stripper.setEndPage(pageNumber);
                String pageContent = stripper.getText(document);
                contentBuilder.append(pageContent);
            }

            String text = contentBuilder.toString();
            document.close();

            if (StringUtils.hasText(text)) {
                Pattern payerNamePattern = Pattern.compile("Name:\\s*(.*?)\\s*Email:", Pattern.DOTALL);
                Matcher payerNameMatcher = payerNamePattern.matcher(text);
                String payerName = "";
                if (payerNameMatcher.find()) {
                    payerName = payerNameMatcher.group(1).trim();
                }

                Pattern emailPattern = Pattern.compile("Email:\\s*(.*?)\\s*InvoiceNo", Pattern.DOTALL);
                Matcher emailMatcher = emailPattern.matcher(text);
                String email = "";
                if (emailMatcher.find()) {
                    email = emailMatcher.group(1).trim();
                }

                Pattern invoicePattern = Pattern.compile("InvoiceNo:\\s*(.*?)\\s*InvoiceDate", Pattern.DOTALL);
                Matcher invoiceMatcher = invoicePattern.matcher(text);
                String invoiceNo = "";
                if (invoiceMatcher.find()) {
                    invoiceNo = invoiceMatcher.group(1).trim();
                }

                Pattern invoiceDatePattern = Pattern.compile("InvoiceDate:\\s*(.*?)\\s*DueDate", Pattern.DOTALL);
                Matcher invoiceDateMatcher = invoiceDatePattern.matcher(text);
                String invoiceDate = "";
                if (invoiceDateMatcher.find()) {
                    invoiceDate = invoiceDateMatcher.group(1).trim();
                }

                Pattern dueDatePattern = Pattern.compile("DueDate:\\s*(.*?)\\s*Amount", Pattern.DOTALL);
                Matcher dueDateMatcher = dueDatePattern.matcher(text);
                String dueDate = "";
                if (dueDateMatcher.find()) {
                    dueDate = dueDateMatcher.group(1).trim();
                }

                Pattern amountPattern = Pattern.compile("Amount:\\s*(.*?)\\s", Pattern.DOTALL);
                Matcher amountMatcher = amountPattern.matcher(text);
                String amount = "";
                if (amountMatcher.find()) {
                    amount = amountMatcher.group(1).trim();
                }

                return String.join(" ",payerName,email,invoiceNo,invoiceDate,dueDate,amount);
            } else {
                return "PDF content is empty";
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "Error reading file: " + e.getMessage();
        }
    }
}