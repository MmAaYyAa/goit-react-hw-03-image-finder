import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { serviceGetPhotos } from 'api/api';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import StyledApp from 'App.styled';
export default class App extends Component {
  state = {
    searchQuery: '',
    gallery: null,
    currentPage: 1,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      this.fetchGallery();
    }
  }

  fetchGallery = async () => {
    this.setState({ error: null, isLoading: true });
    try {
      const { hits } = await serviceGetPhotos(
        this.state.searchQuery,
        this.state.currentPage
      );
      this.setState({ gallery: hits, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    const { gallery, error, isLoading } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        {isLoading && <Loader />}
        {error && Notify.failure(error)}
        {gallery &&
          (gallery.length > 0 ? (
            <ImageGallery hits={gallery} />
          ) : (
            Notify.failure('Not data found')
          ))}
      </StyledApp>
    );
  }
}
