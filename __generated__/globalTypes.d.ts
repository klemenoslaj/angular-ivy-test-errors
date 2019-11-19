/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AssetActionKey {
  addTaskAction = "addTaskAction",
  approveTaskAction = "approveTaskAction",
  createAssetAction = "createAssetAction",
  deleteAssetAction = "deleteAssetAction",
  downloadFilesAction = "downloadFilesAction",
  duplicateAssetAction = "duplicateAssetAction",
  openAssetAction = "openAssetAction",
  rejectTaskAction = "rejectTaskAction",
  removeRelatedAssetAction = "removeRelatedAssetAction",
  removeTaskAction = "removeTaskAction",
  renameAssetAction = "renameAssetAction",
  rotateAssetAction = "rotateAssetAction",
}

export enum AssetDeletionState {
  available = "available",
  locked = "locked",
  marked = "marked",
  proposed = "proposed",
}

/**
 * Predefined, internale file types
 */
export enum AssetFileKind {
  generated = "generated",
  master = "master",
  preview = "preview",
  thumbnail = "thumbnail",
}

export enum CardViewSize {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
}

export enum DayOfWeek {
  FRI = "FRI",
  MON = "MON",
  SAT = "SAT",
  SUN = "SUN",
  THU = "THU",
  TUE = "TUE",
  WED = "WED",
}

export enum NotificationType {
  error = "error",
  info = "info",
  warning = "warning",
}

export enum RelatedAssetChangeAction {
  ADDED = "ADDED",
  REMOVED = "REMOVED",
  UPDATED = "UPDATED",
}

export enum ResultViewType {
  CARD = "CARD",
  LIST = "LIST",
}

/**
 * Pre-defined filter fields
 */
export enum SearchFilterField {
  ASSET_CATEGORY = "ASSET_CATEGORY",
  DOMAIN = "DOMAIN",
  DOMAIN2 = "DOMAIN2",
  MIME_TYPE = "MIME_TYPE",
  RATING = "RATING",
  TYPE = "TYPE",
  WF_STEP = "WF_STEP",
  WF_TARGET = "WF_TARGET",
}

/**
 * Pre-defined sorting fields
 */
export enum SearchSortField {
  ASSSIGNED_TO = "ASSSIGNED_TO",
  CREATED_BY = "CREATED_BY",
  DEADLINE = "DEADLINE",
  ID = "ID",
  MIME_TYPE = "MIME_TYPE",
  MODIFIED_AT = "MODIFIED_AT",
  NAME = "NAME",
  TYPE = "TYPE",
  WF_STEP = "WF_STEP",
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * Writing system (text flow) for languages
 */
export enum WritingSystem {
  LTR = "LTR",
  RTL = "RTL",
  TBRL = "TBRL",
}

export interface AlterAssetTaskInput {
  readonly assetId: string;
  readonly taskId: string;
}

export interface AssetDisplayMetadataUpdateActions {
  readonly setColor?: any | null;
  readonly setDescription?: string | null;
}

export interface AssetLocationMetadataUpdateActions {
  readonly setGeoCoord?: GeoCoordPropertyInput | null;
}

export interface AssetMetadataUpdateActions {
  readonly setName?: string | null;
  readonly setType?: string | null;
  readonly setDomain?: string | null;
  readonly setDomain2?: string | null;
  readonly display?: AssetDisplayMetadataUpdateActions | null;
  readonly workflow?: AssetWorkflowMetadataUpdateActions | null;
  readonly location?: AssetLocationMetadataUpdateActions | null;
}

export interface AssetWorkflowMetadataUpdateActions {
  readonly setAnnotation?: string | null;
  readonly setCompletionState?: number | null;
  readonly setDeadline?: any | null;
  readonly setWorkflow?: string | null;
  readonly setWorkflowStep?: string | null;
  readonly setAssignee?: string | null;
}

export interface AssigneesFilter {
  readonly name?: string | null;
}

export interface CreateAssetFromTemplateInput {
  readonly templateId: string;
  readonly name: string;
  readonly domain?: string | null;
  readonly domain2?: string | null;
}

export interface CreateAssetInput {
  readonly name: string;
  readonly type: string;
  readonly domain?: string | null;
  readonly domain2?: string | null;
}

export interface CreateChatMessageInput {
  readonly assetId: string;
  readonly message: string;
}

export interface CreateTaskInput {
  readonly name: string;
  readonly forAsset?: string | null;
  readonly deadline?: any | null;
}

/**
 * optional cursor to select a data set
 */
export interface Cursor {
  readonly after?: string | null;
  readonly before?: string | null;
  readonly limit?: number | null;
}

export interface DashboardWidgetAddInput {
  readonly definitionId: string;
  readonly x: number;
  readonly y: number;
  readonly rows: number;
  readonly cols: number;
}

export interface DashboardWidgetUpdateInput {
  readonly x: number;
  readonly y: number;
  readonly rows: number;
  readonly cols: number;
}

export interface Domains {
  readonly domain: string;
  readonly domain2: string;
}

export interface GeoCoordPropertyInput {
  readonly latitude: number;
  readonly longitude: number;
}

export interface OptionListFilter {
  readonly domains?: Domains | null;
  readonly assetType?: string | null;
  readonly text?: string | null;
}

export interface QueryInput {
  readonly text: string;
  readonly cursor?: Cursor | null;
  readonly sorting?: ReadonlyArray<SortOrderInput> | null;
  readonly filters?: SearchFilters | null;
}

export interface ResourcePlanningUpdateActions {
  readonly setCalcTimeEnd?: any | null;
  readonly setCalcTimeStart?: any | null;
  readonly setGivenTimeEnd?: any | null;
  readonly setGivenWorkingTime?: number | null;
  readonly setTaskCompletionPercentage?: number | null;
}

export interface SearchFilter {
  readonly key: SearchFilterField;
  readonly value: string;
}

export interface SearchFilters {
  readonly and: ReadonlyArray<SearchFilter>;
}

export interface SortOrderInput {
  readonly by: SearchSortField;
  readonly sortOrder?: SortOrder | null;
}

export interface TaskUpdateActions {
  readonly setName?: string | null;
  readonly display?: AssetDisplayMetadataUpdateActions | null;
  readonly workflow?: AssetWorkflowMetadataUpdateActions | null;
  readonly resourcePlanning?: ResourcePlanningUpdateActions | null;
}

export interface TemplatesSearchInput {
  readonly text?: string | null;
  readonly cursor?: Cursor | null;
  readonly sorting?: ReadonlyArray<SortOrderInput> | null;
}

export interface UpdateChatMessageInput {
  readonly messageId: string;
  readonly message: string;
}

export interface UserNotificationSettingsInput {
  readonly email?: boolean | null;
}

export interface WorkflowInput {
  readonly assetType: string;
  readonly domain?: string | null;
  readonly domain2?: string | null;
  readonly workflowId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
