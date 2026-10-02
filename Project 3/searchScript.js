$(document).ready(function () {

    

    const search_params = new URLSearchParams(window.location.search);

    const search_term = search_params.get("search");


    // only run this code on the search results page

    if ($("#search-results").length > 0) {

        if (search_term && search_term.toLowerCase() === "vacuum") {

            $("#search-message").text(
                'Search Results for "' + search_term + '"'
            );


            $("#search-results").html(`

                <article class="search-result-item">

                    <img
                        src="images/vacuum.jpg"
                        alt="Portable vacuum cleaner">

                    <div class="search-result-info">

                        <h2>
                            Vacuum
                        </h2>

                        <p>
                            <strong>Brand:</strong>
                            Shark
                        </p>

                        <p>
                            <strong>Category:</strong>
                            Home Essentials
                        </p>

                        <p>
                            <strong>Status:</strong>
                            Available
                        </p>

                        <a
                            class="search-result-button"
                            href="itemDetailsAlternate.html">

                            View Item

                        </a>

                    </div>

                </article>

            `);

        } else {

            $("#search-message").text(
                'No results found for "' + (search_term || "") + '"'
            );


            $("#search-results").html(`

                <div class="no-search-results">

                    <h2>
                        No items found
                    </h2>

                    <p>
                        Try searching for "vacuum".
                    </p>

                    <a href="browse.html">
                        Back to Browse
                    </a>

                </div>

            `);

        }

    }

});