ALTER proc [dbo].[Friends_Insert]
	
		    @Title nvarchar(50)
		   ,@Bio nvarchar(50)
		   ,@Summary nvarchar(50)
                   ,@Headline nvarchar(50)
                   ,@Slug nvarchar(50)
		   ,@PrimaryImageUrl nvarchar(50) 
                   ,@StatusId int 
                   ,@UserId int 
                   ,@Id int OUTPUT

/*
Declare @Id int = 0
Declare		  @Title nvarchar(50)= 'Brad'
	         ,@Bio nvarchar(50)= 'english'
		 ,@Summary nvarchar(50) = 'greatest movies'
                 ,@Headline nvarchar(50)= 'top films'
                 ,@Slug nvarchar(50) ='film23'
                 ,@StatusId int =24
                 ,@PrimaryImageUrl nvarchar(50) ='test report'
                 ,@UserId int = 24
        

Execute dbo.Friends_Insert

			
	        @Title 
	       ,@Bio 
	       ,@Summary 
               ,@Headline 
               ,@Slug 
               ,@StatusId 
               ,@PrimaryImageUrl 
               ,@UserId  
	       ,@Id OUTPUT
        

*/
BEGIN
       
Insert into   [dbo].[Friends]
              ([Title]
              ,[Bio]
              ,[Summary]
              ,[Headline]
              ,[Slug]
              ,[StatusId]
              ,[PrimaryImageUrl]
              ,[UserId])
VALUES
              (@Title
              ,@Bio
              ,@Summary
              ,@Headline
              ,@Slug	
              ,@StatusId
              ,@PrimaryImageUrl
              ,@UserId
               )
SET          @Id= SCOPE_IDENTITY()

END
