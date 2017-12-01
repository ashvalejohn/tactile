# Search Demo

## Model
- do all searches in models
- returns a lowerase search query for SQL "LIKE"

  ~~~~
  def self.top_five_results(query_param)

    param = '%' + query_param.downcase + '%'
    Song.where('lower(title) LIKE ?', param).limit(5)

  end
  ~~~~



 ## Controller
 - avoid making a music_searches table by making a searches controller
  ~~~~
  def index
    @search_iv = Model.top_five_results(search_params[:query])
    render :index
  end

  search_params
    params.require(:search).permit(:query)
  end
  ~~~~

## View
  ~~~~
  @search_iv.each do |result|
    json.set! result.id do 
      json.partial! 'api/results/partial', result: result
    end
  end
  ~~~~

## routes.rb
resources :music_searches, only [:index]

## search_api_util
  ~~~~
  export const searchItemDatabase = query => (
    $.ajax({
      type: 'GET',
      url: '/api/music_searches',
      data: { search: { query } } <-- nested this way to get through strong params
    })
  )
  ~~~~

## actions
  ~~~~
  const receiveSearchResults = (searchResults) => ({
    type: RECEIVE_SEARCH_RESULTS,
    results
  })

  export const searchDatabase = query => dispatch => (
    searchItemDatabse(query).then(results => 
      dispatch(receiveSearchResults(results))
    )
  )
  ~~~~

## reducer
  ~~~~
  export const SearchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_SEARCH_RESULTS:
        return action.results;
      default: 
        return state;
    }
  }
 ~~~~
- import searchReducer to entitiesReducer as searchResults

## component
- get searchResults through mapStateToProps
- render results