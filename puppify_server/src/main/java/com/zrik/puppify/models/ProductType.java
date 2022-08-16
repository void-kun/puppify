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
@Table(name = "product_type", schema = "public", catalog = "postgres")
public class ProductType {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "product_type_id", nullable = false)
    private Long productTypeId;
    @Basic
    @Column(name = "product_type_name", nullable = false)
    private String productTypeName;
    @Basic
    @Column(name = "product_type_summary", nullable = false, length = -1)
    private String productTypeSummary;
    @Basic
    @Column(name = "image", nullable = false)
    private String image;
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
    @OneToMany(mappedBy = "productTypeByProductTypeId")
    private Collection<Product> productsByProductTypeId;

}
