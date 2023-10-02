import React, { useState, useEffect } from "react";
import "../static/blog.css"; // Import your CSS file for styling

const Blog = () => {
	const [popularBlogs, setPopularBlogs] = useState([]);
	const [sidebarBlogs, setSidebarBlogs] = useState([]);

	useEffect(() => {
		// Fetch blogs from the API
		(async function fetchBlogs() {
			try {
				const res = await fetch("https://kv-varlu.vercel.app/api/v1/blog");
				if (res.ok) {
					const data = await res.json();
					setPopularBlogs(data.blogs);
				}
			} catch (error) {
				console.error("Error fetching popular blogs:", error);
			}
		})();

		(async function fetchSidebarBlogs() {
			try {
				const res = await fetch(
					"https://kv-varlu.vercel.app/api/v1/blog/product/date"
				);
				if (res.ok) {
					const data = await res.json();
					setSidebarBlogs(data);
				}
			} catch (error) {
				console.error("Error fetching sidebar blogs:", error);
			}
		})();
	}, []);

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-lg-9 col-md-12 '>
					<h4 className='m-2 fw-bold'>Popular Articles</h4>
					<div className='row'>
						{popularBlogs.map((blog) => (
							<div
								className='col-lg-5 col-md-8 m-3 rounded-3 p-0 '
								key={blog._id}
								style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
							>
								<div className='card rounded-2'>
									<img
										src={blog.image}
										className='card-img-top'
										alt={blog.name}
									/>
									<div className='card-body'>
										<h5 className='card-title'>{blog.name}</h5>
										<p className='card-text'>{blog.description}</p>
										<a href='#' className='btn btn-secondary'>
											Read More
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='col-lg-3 d-none d-lg-block'>
					<h4 className='m-2 fw-bold'>Today's Articles</h4>
					{sidebarBlogs.map((blog) => (
						<div
							className='card mb-3'
							style={{ maxWidth: "540px" }}
							key={blog._id}
						>
							<div className='row g-0'>
								<div className='col-md-4'>
									<img
										src={blog.image}
										className='img-fluid rounded-start'
										alt={blog.name}
									/>
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<h5 className='card-title'>{blog.name}</h5>
										<p className='card-text'>{blog.description}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
