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
@Table(name = "order_detail", schema = "public", catalog = "postgres")
public class OrderDetail {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "order_detail_id", nullable = false)
    private Long orderDetailId;
    @Basic
    @Column(name = "order_id", nullable = false)
    private Long orderId;
    @Basic
    @Column(name = "product_detail_id", nullable = false)
    private Long productDetailId;
    @Basic
    @Column(name = "price", nullable = false, precision = 0)
    private double price;
    @Basic
    @Column(name = "quantity", nullable = false)
    private int quantity;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id", nullable = false)
    private Order orderByOrderId;
    @ManyToOne
    @JoinColumn(name = "product_detail_id", referencedColumnName = "product_detail_id", nullable = false)
    private ProductDetail productDetailByProductDetailId;

}
