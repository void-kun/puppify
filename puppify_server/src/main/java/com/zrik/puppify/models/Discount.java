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
public class Discount {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "discount_id", nullable = false)
    private Long discountId;
    @Basic
    @Column(name = "discount_rate", nullable = false)
    private int discountRate;
    @Basic
    @Column(name = "expired", nullable = false)
    private Timestamp expired;
    @Basic
    @Column(name = "discount_info", nullable = false, length = -1)
    private String discountInfo;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @Basic
    @Column(name = "updated_owner")
    private Integer updatedOwner;
    @OneToMany(mappedBy = "discountByDiscountId")
    private Collection<ProductDetail> productDetailsByDiscountId;

}
