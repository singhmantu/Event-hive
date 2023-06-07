import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import app_config from '../../config';
import Rating from 'react-rating';
import toast from 'react-hot-toast';

const Organiserdetail = () => {
  const { id } = useParams();
  const {apiUrl} = app_config;

  const [orgData, setOrgData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [reviewList, setReviewList] = useState([]);
  const [rLoading, setRLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const [rating, setRating] = useState(false);
  const [ratingText, setRatingText] = useState('');

  const fetchData = () => {
    fetch(apiUrl + "event/getbyid/" + id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setOrgData(data);
          fetchReviews(data._id);
          setLoading(false);
        });
      }
    });
  };
  const fetchReviews = (org_id) => {
    fetch(apiUrl + "review/getbyitem/" + org_id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setReviewList(data);
          setRLoading(false);
        });
      }
    });
  };

  const showRating = () => {
    if (currentUser !== null) {
      return (
        <div class="card p-3 mt-3">
          <h4 className="text-muted">Review</h4>
          <hr />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />

          <input
            label="Write Something .."
            fullWidth
            className="mt-2"
            multiline
            rows={3}
            value={ratingText}
            onChange={(e) => setRatingText(e.target.value)}
          />
          <button className="btn btn-primary mt-4" onClick={addReview}>
            Submit Review
          </button>
        </div>
      );
    }
  };

  const addReview = () => {
    fetch(apiUrl + "review/add", {
      method: "POST",
      body: JSON.stringify({
        rating: rating,
        text: ratingText,
        user: currentUser._id,
        org: orgData._id,
        createdAt: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Review Added");
        fetchReviews(orgData._id);
      }
    });
  };

  const displayRatings = () => {
    if (!rLoading) {
      return reviewList.map(({ createdAt, rating, user, text }) => (
        <div className="card">
          <div className="card-body">
            {/* <Avatar alt="User" /> */}
            <span>
              <b>{user.fullname}</b>
            </span>
            <Rating name="simple-controlled" value={rating} />
            <h5 className="text-dark">{text}</h5>
          </div>
        </div>
      ));
    }
  };

  const displayDetails = () => {
    if (!loading && orgData !== null)
      return (
        <div className="card" style={{ marginTop: "-300px" }}>
          <div className="card-body">
            <h2>{orgData.organisationname}</h2>
            <p className="text-muted fw-bold">{orgData.registeredaddress}</p>
            <img
              src={apiUrl + orgData.heroimage}
              alt=""
              className="card-img-top"
            />

            <p className="mt-4">{orgData.description}</p>

            <h4 className="mt-4">Event Images</h4>
            <hr className="mb-3" />
            {orgData.images.length > 0 ? (
              <div className="row">
                {orgData.images.map((image, index) => (
                  <div className="col-md-6 mb-4">
                    <img src={apiUrl + image} alt="" />
                  </div>
                ))}
              </div>
            ) : (
              <h1 className="text-muted text-center">No Images Found</h1>
            )}
          </div>
        </div>
      );
  };

  const getOrgData = async () => {
    const res = await fetch(`${apiUrl}/event/getbyid/${id}`);
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    getOrgData();
  }, []);

  const showOrgData = () => {
    if(orgData===null) return;
    return <>
      <header style={{backgroundImage: `url('${orgData.cover}')`, height: 300}}>
        <div className='container'>

        </div>
      </header>
      <div>
        <div className='container'>

        </div>
      </div>
    </>
  }
  

  return (
    <div>
        {showOrgData()}
    </div>
  );
};

export default Organiserdetail;
