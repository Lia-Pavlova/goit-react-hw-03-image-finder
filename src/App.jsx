import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-loader-spinner";
import imagesApi from "./services/ImagesApi";
import Container from "./components/Container/Container";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import LoadMoreButton from "./components/Button/LoadMoreButton";
import Modal from "./components/Modal/Modal";

import s from "./App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    showModal: false,
    largeImageURL: "",
    tags: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then((hits) => {
        if (hits.length === 0) {
          toast.info("Try again!", {
            className: s.toaster,
          });
        }
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .then(() => {
        if (this.state.currentPage > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch(() => {
        toast.info("Try again!", {
          className: s.toaster,
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  onModal = ({ largeImageURL, tags }) => {
    this.setState({
      largeImageURL: largeImageURL,
      tags: tags,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, isLoading, showModal, largeImageURL, tags } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery hits={hits} onClick={this.onModal} />

        {shouldRenderLoadMoreButton && (
          <LoadMoreButton onClick={this.fetchImages} />
        )}

        {isLoading && (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={50}
            width={50}
            className={s.Loader}
          />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
