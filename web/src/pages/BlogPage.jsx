import React, { useEffect, useState } from "react";
import queryString from "query-string";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { formatDateTime } from "lib/Helper";
import {
  AiOutlineClockCircle,
  AiOutlineEye,
  AiOutlineFacebook,
} from "react-icons/ai";
import Loading from "components/layout/Loading";
import blogApi from "api/blogApi";
function BlogPage() {
    const param = queryString.parse(window.location.search);
  const [blog, setBlog] = useState({});
  const [status, setStatus] = useState("loading");
  // @ts-ignore
  const blogs = useSelector((state) => state.blogs);
  useEffect(() => {
    blogApi
      .getBlogById({ id: param.id })
      .then((res) => {
        setBlog(res.data);
        setStatus("success");
      })
  }, [param.id]);
  return (
    <div className="page-content">
      {status === "loading" ? (
        <Loading />
      ) :  (
        <Container className="blog-page__container fs--8">
          <h4 className="blog-page__title">{blog.title}</h4>
      
          <div className="blog-page__content">
            <div className="image-wrapper blog-page__content--main-img">
              <img alt="Cà phê Thơ Dũng" src={blog.mainImgLink} />
            </div>
            <br />
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </Container>
      )}
    </div>
  );
}

export default React.memo(BlogPage);
