import type { Schema, Struct } from '@strapi/strapi';

export interface DetailsClassDetails extends Struct.ComponentSchema {
  collectionName: 'components_details_class_details';
  info: {
    displayName: 'ClassDetails';
  };
  attributes: {
    classRoom: Schema.Attribute.String;
    schedule: Schema.Attribute.Time;
  };
}

export interface DetailsEventDetails extends Struct.ComponentSchema {
  collectionName: 'components_details_event_details';
  info: {
    displayName: 'EventDetails';
  };
  attributes: {
    place: Schema.Attribute.String;
    schedule: Schema.Attribute.Date;
  };
}

export interface DetailsTeacherDetails extends Struct.ComponentSchema {
  collectionName: 'components_details_teacher_details';
  info: {
    displayName: 'TeacherDetails';
  };
  attributes: {
    experience: Schema.Attribute.String;
    specialty: Schema.Attribute.String;
  };
}

export interface DynamicContentGallery extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_content_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface DynamicContentLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_content_link_items';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface DynamicContentLinkList extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_content_link_lists';
  info: {
    displayName: 'LinkList';
  };
  attributes: {
    Links: Schema.Attribute.Component<'dynamic-content.link-item', true>;
  };
}

export interface DynamicContentRichText extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_content_rich_texts';
  info: {
    displayName: 'RichText';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
  };
}

export interface EventsStudyMaterial extends Struct.ComponentSchema {
  collectionName: 'components_events_study_materials';
  info: {
    displayName: 'StudyMaterial';
  };
  attributes: {
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['video', 'document', 'presentation', 'link']
    >;
  };
}

export interface EventsSubtheme extends Struct.ComponentSchema {
  collectionName: 'components_events_subthemes';
  info: {
    displayName: 'Subtheme';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface EventsTheme extends Struct.ComponentSchema {
  collectionName: 'components_events_themes';
  info: {
    displayName: 'Theme';
  };
  attributes: {
    name: Schema.Attribute.String;
    Subthemes: Schema.Attribute.Component<'events.subtheme', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'details.class-details': DetailsClassDetails;
      'details.event-details': DetailsEventDetails;
      'details.teacher-details': DetailsTeacherDetails;
      'dynamic-content.gallery': DynamicContentGallery;
      'dynamic-content.link-item': DynamicContentLinkItem;
      'dynamic-content.link-list': DynamicContentLinkList;
      'dynamic-content.rich-text': DynamicContentRichText;
      'events.study-material': EventsStudyMaterial;
      'events.subtheme': EventsSubtheme;
      'events.theme': EventsTheme;
    }
  }
}
