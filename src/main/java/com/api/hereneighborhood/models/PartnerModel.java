package com.api.hereneighborhood.models;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_PARTNER")
public class PartnerModel implements Serializable {
    private static final long seriaVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String fantasyName;
    @Column(nullable = false, unique = true, length = 14)
    private String cnpj;
    @Column(nullable = false, unique = true, length = 11)
    private String cpf;
    @Column(nullable = false, unique = true, length = 4)
    private String marketSegmento;
    @Column(nullable = false, unique = true, length = 2)
    private String uf;
    @Column(nullable = false)
    private String city;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false, length = 11)
    private String foneOne;
    @Column(nullable = false, length = 11)
    private String foneTwo;
    @Column(length = 11)
    private String foneThree;


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFantasyName() {
        return fantasyName;
    }

    public void setFantasyName(String fantasyName) {
        this.fantasyName = fantasyName;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getMarketSegmento() {
        return marketSegmento;
    }

    public void setMarketSegmento(String marketSegmento) {
        this.marketSegmento = marketSegmento;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFoneOne() {
        return foneOne;
    }

    public void setFoneOne(String foneOne) {
        this.foneOne = foneOne;
    }

    public String getFoneTwo() {
        return foneTwo;
    }

    public void setFoneTwo(String foneTwo) {
        this.foneTwo = foneTwo;
    }

    public String getFoneThree() {
        return foneThree;
    }

    public void setFoneThree(String foneThree) {
        this.foneThree = foneThree;
    }
}
