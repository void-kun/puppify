package com.zrik.puppify.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product_image", schema = "public", catalog = "postgres")
public class ProductImage {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "product_image_id", nullable = false)
    private Long productImageId;
    @Basic
    @Column(name = "product_detail_id", nullable = false)
    private Long productDetailId;
    @Basic
    @Column(name = "url", nullable = false)
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
    @ManyToOne
    @JoinColumn(name = "product_detail_id", referencedColumnName = "product_detail_id", nullable = false)
    private ProductDetail productDetailByProductDetailId;

}
