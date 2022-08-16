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
public class Product {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "product_id", nullable = false)
    private Long productId;
    @Basic
    @Column(name = "product_type_id", nullable = false)
    private Long productTypeId;
    @Basic
    @Column(name = "supplier_id", nullable = false)
    private Long supplierId;
    @Basic
    @Column(name = "product_name", nullable = false)
    private String productName;
    @Basic
    @Column(name = "product_brief", nullable = false, length = -1)
    private String productBrief;
    @Basic
    @Column(name = "state", nullable = false)
    private boolean state;
    @Basic
    @Column(name = "slug", nullable = false)
    private String slug;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @Basic
    @Column(name = "updated_owner")
    private Integer updatedOwner;
    @ManyToOne
    @JoinColumn(name = "product_type_id", referencedColumnName = "product_type_id", nullable = false)
    private ProductType productTypeByProductTypeId;
    @ManyToOne
    @JoinColumn(name = "supplier_id", referencedColumnName = "supplier_id", nullable = false)
    private Supplier supplierBySupplierId;
    @OneToMany(mappedBy = "productByProductId")
    private Collection<ProductDetail> productDetailsByProductId;

}
