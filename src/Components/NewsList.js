import React, { useEffect, useState } from 'react'

import { Card, Col, container, NavItem, Row } from "react-bootstrap";

import useNewsData from './hooks/useNewsData';
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
    const { category, searchTerm } = props;

    //================================================================
    // const [searchValue, setSearchValue] = useState("");
    // const handleSearchSubmit = (event) => {
    //     event.preventDefault();
    //     const searchValue = event.target.search.value; // Access the search value from the form
    //     console.log("Search value:", searchValue);
    // }
    //================================================================
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

    const { newsData, loading, error } = useNewsData(category, searchTerm);
    if (!newsData || newsData.length === 0) {
        return <p>Loading...</p>; // Or display a loading indicator
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }



    // console.log(newsData);


    var reqdata = newsData.filter((item) => item.attributes.category === category);
    if (!reqdata || reqdata.length === 0) {
        var reqdata = newsData;
    }
    const totalArticles = reqdata.length;
    //console.log(totalArticles);
    const totalPages = Math.ceil(totalArticles / pageSize);
    //console.log(totalPages);
    const startIndex = (currentPage - 1) * pageSize;
    //console.log(startIndex);
    const endIndex = startIndex + pageSize;
    //console.log(endIndex);
    const currentArticles = reqdata.slice(startIndex, endIndex);
    // console.log(currentArticles);

    return (
        <div className='padding'>
            <Row>
                {currentArticles?.map((article) => (
                    <Col xs={12} md={6} lg={4} key={article.id}>
                        <Card>
                            <Card.Img src={article.attributes.newsIcon} variant="top" />
                            <Card.Body>
                                <div>
                                    <Card.Title >{article.attributes.headline}</Card.Title>
                                    <Card.Text>{article.attributes.category}</Card.Text>
                                </div>
                                <div>
                                    <Card.Text>Source: {article.attributes.newsSource}</Card.Text>
                                    <Card.Text>Hashtags: {article.attributes.hashtags}</Card.Text>
                                </div>

                                <Card.Footer className="text-muted"><Card.Link href={article.attributes.updatedAt}>Read More</Card.Link></Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ), <h1>Loading...</h1>)}
            </Row>
            {(totalPages > 1) ? <div className='padding'>
                <CustomPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div> : <></>}
        </div>
    )
}

export default NewsList;
