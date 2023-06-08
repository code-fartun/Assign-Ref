
ALTER proc [dbo].[Friends_SelectAllV3]
		--@Id int
as
/*
	

	Execute dbo.Friends_SelectAllV3

*/

BEGIN


	/*SELECT [Id]
      ,[Title]
      ,[Bio]
      ,[Summary]
      ,[Headline]
      ,[Slug]
      ,[StatusId]
      ,[PrimaryImageUrl]
	  ,[UserId]
      ,[DateCreated]
      ,[DateModified]
     -- ,[UserId]
  FROM [dbo].[Friends]*/
  
  --this down below works FriendV2webApi get all bugs
  SELECT f.[Id]
		,f.[Title]
		,f.[Bio]
      ,f.[Summary]
      ,f.[Headline]
      ,f.[Slug]
      ,f.[StatusId]
	  ,i.[Id]   --as ImageId
	  ,i.[Url]
	   ,i.[TypeId]
	  --,i.[Url]
	   ,f.[UserId]
      ,f.[DateCreated]
      ,f.[DateModified]
     

     

  FROM [dbo].[FriendsV2] as f inner join dbo.Images as i
  ON f.PrimaryImageId = i.Id
 -- Where f.Id = @Id


END



