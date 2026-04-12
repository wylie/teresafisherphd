# Analytics Events

This site uses GA4 (`G-3J4GXJ4V1L`) with a small custom event layer for clearer reporting.

## Tracked Events

| Event name | When it fires | Key params |
| --- | --- | --- |
| `contact_cta_click` | User clicks a link/button to `/contact/` | `page_path`, `link_text`, `event_location`, `destination_path` |
| `contact_form_view` | Contact page loads and the Google Form is shown | `page_path`, `form_provider` |
| `insurance_check_click` | User clicks the Alma insurance verification link | `page_path`, `event_location`, `link_url` |
| `phone_click` | User clicks a `tel:` link | `page_path`, `link_text`, `phone_number`, `event_location` |
| `email_click` | User clicks a `mailto:` link | `page_path`, `link_text`, `email_address`, `event_location` |
| `external_link_click` | User clicks any outbound non-site link without a custom event | `page_path`, `link_text`, `link_url`, `link_domain` |

## Event Locations In Use

- `home_hero`
- `navigation`
- `individual_therapy_page`
- `emdr_page`
- `supervision_page`
- `community_outreach_page`
- `rates_and_insurance`
- `footer`

## Recommended GA4 Conversions

Mark these as conversions in GA4:

- `contact_cta_click`
- `contact_form_view`
- `insurance_check_click`
- `phone_click`
- `email_click`

## Verification Checklist

1. Open GA4 DebugView.
2. Browse key pages and click the `Connect with me` buttons, nav contact link, footer phone/email, and Alma link.
3. Confirm each event appears with expected parameters (especially `event_location` and `page_path`).
