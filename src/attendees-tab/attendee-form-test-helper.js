
/**
 * @param {Number} index
 * @param {Object[]} fields 
 */
function generateFormDataForAttendeeWithIndex( formData, index, key, attendeeFields ) {
  attendeeFields.forEach( fields => {
    for( const name in fields ) {
      formData.append(`attendees[${index}]['${key}']['${name}']`, fields[name] );
    }
  });
  return formData;
}

function generateAttendeeUpdateRequestErrorResponse() {
  return {
    "body": {
      "code": "attendee_already_enrolled",
      "message": "Attendee is already enrolled.",
      "data": {
        "ID": 534,
        "post_author": "1",
        "post_date": "2023-08-09 10:58:54",
        "post_date_gmt": "2023-08-09 09:58:54",
        "post_content": "",
        "post_title": "",
        "post_excerpt": "",
        "post_status": "publish",
        "comment_status": "closed",
        "ping_status": "closed",
        "post_password": "",
        "post_name": "534",
        "to_ping": "",
        "pinged": "",
        "post_modified": "2023-08-09 11:01:53",
        "post_modified_gmt": "2023-08-09 10:01:53",
        "post_content_filtered": "",
        "post_parent": 0,
        "guid": "https://localhost:9443/attendee/534/",
        "menu_order": 0,
        "post_type": "attendee",
        "post_mime_type": "",
        "comment_count": "0",
        "filter": "raw",
        "acf": {
          "dob": "05/05/1960",
          "ppsn": "THATCHER001",
          "gender": "Female",
          "first_name": "Margaret",
          "last_name": "Thatcher",
          "employee_number": "THATCHER001",
          "email": "",
          "job_title": "Assistant Engineer",
          "department": "Roads",
          "local_authority": "4",
          "course_prerequisites_met": [
            "166"
          ],
          "special_requirements": ""
        },
        "meta": {
          "dob": [
            "1960-05-05"
          ],
          "_dob": [
            "field_6388299b9d810"
          ],
          "ppsn": [
            "THATCHER001"
          ],
          "_ppsn": [
            "field_638829b69d811"
          ],
          "gender": [
            "Female"
          ],
          "_gender": [
            "field_638829d29d813"
          ],
          "groups-read": [
            "6",
            "4"
          ],
          "product_ids": [
            "166"
          ],
          "first_name": [
            "Margaret"
          ],
          "_first_name": [
            "field_635b8383c9ff3"
          ],
          "last_name": [
            "Thatcher"
          ],
          "_last_name": [
            "field_635b838cc9ff4"
          ],
          "employee_number": [
            "THATCHER001"
          ],
          "_employee_number": [
            "field_635b792641bc6"
          ],
          "email": [
            ""
          ],
          "_email": [
            "field_635b821cb31fb"
          ],
          "job_title": [
            "Assistant Engineer"
          ],
          "_job_title": [
            "field_637652edd796e"
          ],
          "department": [
            "Roads"
          ],
          "_department": [
            "field_635b83a8c9ff5"
          ],
          "local_authority": [
            "4"
          ],
          "_local_authority": [
            "field_635b7acf221a6"
          ],
          "course_prerequisites_met": [
            "a:1:{i:0;s:3:\"166\";}"
          ],
          "_course_prerequisites_met": [
            "field_63848c2d39a03"
          ],
          "special_requirements": [
            ""
          ],
          "_special_requirements": [
            "field_63848c6739a04"
          ],
          "order_ids": [
            "536"
          ]
        }
      }
    },
    "status": 500,
    "headers": {
      "Allow": "GET, POST, PUT, PATCH, DELETE"
    }
  };
}

function generateAttendeeUpdateRequestSuccessResponse() {
  return {
    "body": {
      "id": 549,
      "date": "2023-08-09T15:54:35",
      "date_gmt": "2023-08-09T14:54:35",
      "guid": {
        "rendered": "https://localhost:9443/attendee/549/",
        "raw": "https://localhost:9443/attendee/549/"
      },
      "modified": "2023-08-09T15:54:35",
      "modified_gmt": "2023-08-09T14:54:35",
      "password": "",
      "slug": "549",
      "status": "publish",
      "type": "attendee",
      "link": "https://localhost:9443/attendee/549/",
      "template": "",
      "meta": {
        "groups-read": [
          4
        ],
        "order_ids": [
          536
        ],
        "product_ids": [
          166
        ]
      },
      "permalink_template": "https://localhost:9443/attendee/%pagename%/",
      "generated_slug": "549",
      "acf": {
        "first_name": "Anja",
        "last_name": "Pieters",
        "employee_number": "ANJA001",
        "email": "",
        "job_title": "Administration and Engineering Staff working in Roads /Transportation Sections of Local Authorities",
        "department": "Housing",
        "local_authority": "1",
        "course_prerequisites_met": [],
        "special_requirements": ""
      },
      "_links": {
        "self": [
          {
            "href": "https://localhost:9443/wp-json/wp/v2/attendee/549"
          }
        ],
        "collection": [
          {
            "href": "https://localhost:9443/wp-json/wp/v2/attendee"
          }
        ],
        "about": [
          {
            "href": "https://localhost:9443/wp-json/wp/v2/types/attendee"
          }
        ],
        "version-history": [
          {
            "count": 0,
            "href": "https://localhost:9443/wp-json/wp/v2/attendee/549/revisions"
          }
        ],
        "wp:attachment": [
          {
            "href": "https://localhost:9443/wp-json/wp/v2/media?parent=549"
          }
        ],
        "wp:action-publish": [
          {
            "href": "https://localhost:9443/wp-json/wp/v2/attendee/549"
          }
        ],
        "wp:action-unfiltered-html": [
          {
            "href": "https://localhost:9443/wp-json/wp/v2/attendee/549"
          }
        ],
        "curies": [
          {
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
          }
        ]
      }
    },
    "status": 201,
    "headers": {
      "Location": "https://localhost:9443/wp-json/wp/v2/attendee/549",
      "Allow": "GET, POST"
    }
  };
}

export {
  generateAttendeeUpdateRequestErrorResponse,
  generateAttendeeUpdateRequestSuccessResponse,
  generateFormDataForAttendeeWithIndex
}
