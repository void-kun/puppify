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
@Table(name = "product_detail", schema = "public", catalog = "postgres")
public class ProductDetail {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "product_detail_id", nullable = false)
    private Long productDetailId;
    @Basic
    @Column(name = "collection_id", nullable = false)
    private Long collectionId;
    @Basic
    @Column(name = "product_id", nullable = false)
    private Long productId;
    @Basic
    @Column(name = "discount_id", nullable = false)
    private Long discountId;
    @Basic
    @Column(name = "size_id", nullable = false)
    private Long sizeId;
    @Basic
    @Column(name = "color_id", nullable = false)
    private Long colorId;
    @Basic
    @Column(name = "price", nullable = false)
    private double price;
    @Basic
    @Column(name = "unit", nullable = false, length = 10)
    private String unit;
    @Basic
    @Column(name = "quantity", nullable = false)
    private int quantity;
    @Basic
    @Column(name = "weight")
    private Double weight;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @Basic
    @Column(name = "updated_owner")
    private Integer updatedOwner;
    @OneToMany(mappedBy = "productDetailByProductDetailId")
    private Collection<OrderDetail> orderDetailsByProductDetailId;
    @ManyToOne
    @JoinColumn(name = "collection_id", referencedColumnName = "collection_id", nullable = false)
    private com.zrik.puppify.models.Collection collectionByCollectionId;
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "product_id", nullable = false)
    private Product productByProductId;
    @ManyToOne
    @JoinColumn(name = "discount_id", referencedColumnName = "discount_id", nullable = false)
    private Discount discountByDiscountId;
    @ManyToOne
    @JoinColumn(name = "size_id", referencedColumnName = "size_id", nullable = false)
    private Size sizeBySizeId;
    @ManyToOne
    @JoinColumn(name = "color_id", referencedColumnName = "color_id", nullable = false)
    private Color colorByColorId;
    @OneToMany(mappedBy = "productDetailByProductDetailId")
    private Collection<ProductImage> productImagesByProductDetailId;

}
