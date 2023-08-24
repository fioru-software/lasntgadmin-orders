
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

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

function generateAttendeeBody( attendee = {} ) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
  const dateTime = DateTime.fromJSDate( birthDate );
  const dob = dateTime.toISODate();
  return Object.assign(
    attendee,
    {
      status: "publish",
      meta: {
        "groups-read": [ faker.number.int(33) ],
        order_ids: [ faker.number.int(1000) ],
        product_ids: [ faker.number.int(1000) ],
      },
      acf: {
        first_name: firstName,
        last_name: lastName,
        employee_number: faker.string.uuid(),
        email: faker.internet.email({ firstName, lastName, provider: 'example.com' }),
        job_title: faker.person.jobTitle(),
        department: faker.commerce.department(),
        local_authority: `${faker.number.int(5)}`,
        course_prerequisites_met: [],
        special_requirements: "",
        dob,
        ppsn: faker.string.alphanumeric(10),
        gender: faker.helpers.arrayElement( ["Male","Female"] ),
        post_id: faker.string.uuid(),
        occupant_id: faker.string.uuid(),
        utility_group: faker.string.uuid()
      }
    }
  );
}

function generateAttendeePostData( attendee ) {
  const id = "id" in attendee ? attendee.id : faker.number.int()
  return {
    "ID": id,
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
    "post_name": `${ id }`,
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
      "dob": DateTime.fromISO( attendee.acf.dob ).toFormat( 'dd/MM/yyyy' ), // "05/05/1960"
      "ppsn": attendee.acf.ppsn,
      "gender": attendee.acf.gender,
      "first_name": attendee.acf.first_name,
      "last_name": attendee.acf.last_name,
      "employee_number": attendee.acf.employee_number,
      "email": attendee.acf.email,
      "job_title": attendee.acf.job_title,
      "department": attendee.acf.department,
      "local_authority": attendee.acf.local_authority,
      "course_prerequisites_met": attendee.acf.course_prerequisites_met,
      "special_requirements": attendee.acf.special_requirements
    },
    "meta": {
      "groups-read": attendee.meta["groups-read"].map(String),
      "product_ids": attendee.meta.product_ids.map(String),
      "order_ids": attendee.meta.order_ids.map(String)
    }
  };
}

/**
 * Contains additional acf fields
 */

function generateAttendeeUpdateRequestErrorResponse( code, message, data ) {
  return {
    body: {
      code,
      message,
      data
    },
    status: 500,
    headers: {
      Allow: "GET, POST, PUT, PATCH, DELETE"
    }
  };
}

function generateOrderUpdateRequestErrorResponse( code, message, data ) {
  return {
    body: {
      code,
      message,
      data
    },
    status: 500,
    headers: {
      Allow: "GET, POST, PUT, PATCH, DELETE"
    }
  };
}

/**
 * Missing additional acf fields
 */
function generateAttendeeUpdateRequestSuccessResponse( body ) {
  return {
    body: {
      id: body.id,
      date: "2023-08-09T15:54:35",
      date_gmt: "2023-08-09T14:54:35",
      guid: {
        rendered: `https://localhost:9443/attendee/${ body.id }/`,
        raw: `https://localhost:9443/attendee/${ body.id }/`
      },
      modified: "2023-08-09T15:54:35",
      modified_gmt: "2023-08-09T14:54:35",
      password: "",
      slug: `${ body.id }`,
      status: "publish",
      type: "attendee",
      link: `https://localhost:9443/attendee/${ body.id }/`,
      template: "",
      meta: {
        "groups-read": body.meta['groups-read'],
        order_ids: body.meta.order_ids,
        product_ids: body.meta.product_ids
      },
      permalink_template: "https://localhost:9443/attendee/%pagename%/",
      generated_slug: `${ body.id }`,
      acf: {
        first_name: body.acf.first_name,
        last_name: body.acf.last_name,
        employee_number: body.acf.employee_number,
        email: body.acf.email,
        job_title: body.acf.job_title,
        department: body.acf.department,
        local_authority: body.acf.local_authority,
        course_prerequisites_met: body.acf.course_prerequisites_met,
        special_requirements: body.acf.special_requirements
      },
      _links: {}
    },
    status: 201,
    headers: {
      Location: "https://localhost:9443/wp-json/wp/v2/attendee/549",
      Allow: "GET, POST"
    }
  };
}

// attendees with valid requests are re-rendered with an added id
// attendees with invalid requests are left as is
//
// - extract id and employee numbers from invalid requests
// - search form data for attendee with employee number
// - add id to the form data
// - rerender attendees
//



export {
  generateAttendeeUpdateRequestErrorResponse,
  generateOrderUpdateRequestErrorResponse,
  generateAttendeeUpdateRequestSuccessResponse,
  generateFormDataForAttendeeWithIndex,
  generateAttendeeBody,
  generateAttendeePostData
}
