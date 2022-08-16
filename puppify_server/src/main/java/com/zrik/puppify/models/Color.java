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
public class Color {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "color_id", nullable = false)
    private Long colorId;
    @Basic
    @Column(name = "color_code", nullable = false, length = 50)
    private String colorCode;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @Basic
    @Column(name = "updated_owner")
    private Integer updatedOwner;
    @OneToMany(mappedBy = "colorByColorId")
    private Collection<ProductDetail> productDetailsByColorId;

}
