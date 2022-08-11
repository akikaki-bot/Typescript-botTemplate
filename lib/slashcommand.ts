export interface SlashCommandComponent {
    "name": string;
    "description": string;
    "options" ?: Array<SlashCommmandOptionsComponent>
  }
  
  type SlashCommmandOptionsComponent = {
    "name": string;
    "description": string;
    "type": SlashOptionValue;
    "required"?: boolean;
    "choices"?: Array<SlashCommandOptionsChoices>
    "options"?: Array<SlashCommandOptionsSubCommandSetting>
  }

  /**
   * @deprecation
   */
  type SlashCommandOptionsSubCommandSetting = {
    "type": SlashOptionValue,
    "name": string,
    "description": string
    "required"?:boolean
  }
  

  type SlashCommandOptionsChoices = {
    "name": string;
    "value": string;
  }

  export enum SlashOptionValue {
    Subcommand = 1,
    Subcommand_group = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
    Attachment = 11
  }