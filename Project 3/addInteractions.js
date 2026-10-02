$(document).ready(function () {

    /* Interaction 1 */
    /* add email field for the specific students in add item who can borrow field */

    $("#borrow-permission").on("change", function () {

        const selected_value = $(this).val();

        const specific_selected_row = $(this).closest(".form-row");


        $(".student-email-row").remove();


        if (selected_value === "specific") {

            specific_selected_row.addClass("specific-selected");


            specific_selected_row.after(`

                <div class="form-row student-email-row">

                    <label for="student-emails">
                        Student Emails
                    </label>

                    <input
                        type="text"
                        id="student-emails"
                        name="student-emails"
                        placeholder="Enter emails separated by commas">

                </div>

            `);

        } else {

            specific_selected_row.removeClass("specific-selected");

        }

    });

    /* interaction 2 */
    // check required fields when create item button is clicked to add item

    $(".add-item-form").on("click", ".create-item-button", function (event) {

        let form_has_error = false;


        // remove old error messages

        $(".form-error-message").remove();


        // remove old red borders

        $(".form-error").removeClass("form-error");


        // item name

        const item_name = $("#item-name");

        if (item_name.val().trim() === "") {

            form_has_error = true;

            item_name.addClass("form-error");

            item_name.after(`
                <div class="form-error-message">
                    Please enter an item name
                </div>
            `);

        }


        // brand

        const brand = $("#brand");

        if (brand.val().trim() === "") {

            form_has_error = true;

            brand.addClass("form-error");

            brand.after(`
                <div class="form-error-message">
                    Please enter a brand
                </div>
            `);

        }


        // category

        const category = $("#item-category");

        if (category.val() === "") {

            form_has_error = true;

            category.addClass("form-error");

            category.after(`
                <div class="form-error-message">
                    Please select a category
                </div>
            `);

        }


        // pickup area

        const pickup_area = $("#pickup-area");

        if (pickup_area.val() === "") {

            form_has_error = true;

            pickup_area.addClass("form-error");

            pickup_area.after(`
                <div class="form-error-message">
                    Please select a pickup area
                </div>
            `);

        }


        // who can borrow

        const borrow_permission = $("#borrow-permission");

        if (borrow_permission.val() === "") {

            form_has_error = true;

            borrow_permission.addClass("form-error");

            borrow_permission.after(`
                <div class="form-error-message">
                    Please select who can borrow
                </div>
            `);

        }


        // description

        const description = $("#item-description");

        if (description.val().trim() === "") {

            form_has_error = true;

            description.addClass("form-error");

            description.after(`
                <div class="form-error-message">
                    Please enter a description
                </div>
            `);

        }


        // student emails only if specific students is selected

        if (borrow_permission.val() === "specific") {

            const student_emails = $("#student-emails");

            if (student_emails.val().trim() === "") {

                form_has_error = true;

                student_emails.addClass("form-error");

                student_emails.after(`
                    <div class="form-error-message">
                        Please enter at least one student email
                    </div>
                `);

            }

        }


        // stop form from submitting when there are errors

        if (form_has_error) {

            event.preventDefault();

        }

    });



});