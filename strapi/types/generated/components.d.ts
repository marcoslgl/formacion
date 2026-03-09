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
    schedule: Schema.Attribute.DateTime;
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
      'events.study-material': EventsStudyMaterial;
      'events.subtheme': EventsSubtheme;
      'events.theme': EventsTheme;
    }
  }
}
