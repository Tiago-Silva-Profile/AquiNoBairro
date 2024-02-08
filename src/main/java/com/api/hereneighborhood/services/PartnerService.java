package com.api.hereneighborhood.services;

import com.api.hereneighborhood.repositories.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartnerService {

    @Autowired
    PartnerRepository partnerRepository;



}
