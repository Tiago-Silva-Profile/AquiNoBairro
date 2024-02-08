package com.api.hereneighborhood.repositories;

import com.api.hereneighborhood.models.PartnerModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PartnerRepository extends JpaRepository<PartnerModel, UUID> {
}
