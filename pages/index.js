import React from "react";
import { Grid, Container, Box } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("https://assessment-edvora.herokuapp.com/");
  const data = await res.json();
  // console.log("data", res);
  return {
    props: { data },
  };
};

const home = ({ data }) => {
  console.log("data", data);

  return (
    <>
      <Container fixed>
        <Box className={styles.container}></Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Box>Hello</Box>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Box className={styles.topDetails}>
              <h4>Edvora</h4>
              <p>Products</p>
            </Box>
            <h6 className={styles.ProductNameHeading}>Product Name</h6>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={styles.ProductCardWrapper}>
                <Grid container spacing={2}>
                  {data.map((item) => {
                    return (
                      <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Box className={styles.productCard}>
                          <Box className={styles.productTopContent}>
                            <Image
                              src="/litleboy.jpg"
                              width="80"
                              height="50"
                              alt="boy"
                              className={styles.productImg}
                            ></Image>
                            <Box className={styles.productDetails}>
                              <p>{item.product_name}</p>
                              <span>{item.brand_name}</span>
                              <h5>$ {item.price}</h5>
                            </Box>
                          </Box>
                          <Box className={styles.locationAndDateWrapper}>
                            <p>
                              {item.address.city}
                              {/* {item.address.state} */}
                            </p>{" "}
                            <p>Date {item.date}</p>
                          </Box>
                          <Box>
                            <p className={styles.des}>{item.discription}</p>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default home;
