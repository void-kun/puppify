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
public class Collection {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "collection_id", nullable = false)
    private Long collectionId;
    @Basic
    @Column(name = "collection_name", nullable = false, length = 50)
    private String collectionName;
    @Basic
    @Column(name = "slug", nullable = false, length = 100)
    private String slug;
    @Basic
    @Column(name = "image", nullable = false)
    private String image;
    @Basic
    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;
    @Basic
    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
    @Basic
    @Column(name = "updated_owner")
    private Integer updatedOwner;
    @OneToMany(mappedBy = "collectionByCollectionId")
    private java.util.Collection<ProductDetail> productDetailsByCollectionId;

}
