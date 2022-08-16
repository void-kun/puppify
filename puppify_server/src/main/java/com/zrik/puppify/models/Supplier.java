package com.zrik.puppify.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Supplier {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "supplier_id", nullable = false)
    private Long supplierId;
    @Basic
    @Column(name = "company_name", nullable = false)
    private String companyName;
    @Basic
    @Column(name = "company_fullname", nullable = false)
    private String companyFullname;
    @Basic
    @Column(name = "contact_title", nullable = false)
    private String contactTitle;
    @Basic
    @Column(name = "address1")
    private String address1;
    @Basic
    @Column(name = "address2")
    private String address2;
    @Basic
    @Column(name = "city", nullable = false, length = 100)
    private String city;
    @Basic
    @Column(name = "country", nullable = false, length = 50)
    private String country;
    @Basic
    @Column(name = "portal_code", nullable = false, length = 15)
    private String portalCode;
    @Basic
    @Column(name = "phone", nullable = false, length = 18)
    private String phone;
    @Basic
    @Column(name = "url")
    private String url;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @Basic
    @Column(name = "updated_owner")
    private Integer updatedOwner;
    @OneToMany(mappedBy = "supplierBySupplierId")
    private Collection<Product> productsBySupplierId;

}
