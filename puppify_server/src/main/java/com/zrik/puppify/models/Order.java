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
public class Order {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "order_id", nullable = false)
    private Long orderId;
    @Basic
    @Column(name = "user_id", nullable = false)
    private Long userId;
    @Basic
    @Column(name = "amount", nullable = false)
    private double amount;
    @Basic
    @Column(name = "ship_name", nullable = false)
    private String shipName;
    @Basic
    @Column(name = "ship_address1", nullable = false)
    private String shipAddress1;
    @Basic
    @Column(name = "ship_address2")
    private String shipAddress2;
    @Basic
    @Column(name = "city", nullable = false)
    private String city;
    @Basic
    @Column(name = "country", nullable = false)
    private String country;
    @Basic
    @Column(name = "portal_code", nullable = false, length = 15)
    private String portalCode;
    @Basic
    @Column(name = "telephone", nullable = false, length = 18)
    private String telephone;
    @Basic
    @Column(name = "email", nullable = false)
    private String email;
    @Basic
    @Column(name = "order_date", nullable = false)
    private Timestamp orderDate;
    @Basic
    @Column(name = "shipped", nullable = false)
    private boolean shipped;
    @Basic
    @Column(name = "tracking_number", nullable = false)
    private String trackingNumber;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @OneToMany(mappedBy = "orderByOrderId")
    private Collection<OrderDetail> orderDetailsByOrderId;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User userByUserId;
}
